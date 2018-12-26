const {transaction} = require('./index');
const {v1} = require('./v1');
const base32 = require('base32.js');
const { Keypair } = require('stellar-base');
const crypto = require('crypto');

const getRawTxAndEncode = (secrect, sequence, operation, params) => {
    let rawTx = {
        version: 1,
        account: null,
        sequence: sequence,
        memo: Buffer.alloc(0),
        operation: operation,
        params: params,
        signature: null
    };

    transaction.sign(rawTx, secrect);
    console.log(rawTx);
    return transaction.encode(rawTx).toString('base64');
}

const login = (secret) => {
    const data = genKeyAndSignature(secret);
    data.signature = data.signature.toString('base64');

    return data;
}

const genKeyAndSignature = (secret) => {
    const key = Keypair.fromSecret(secret);

    const publicKey = key.publicKey();
    const hash = crypto.createHash('sha256')
        .update(publicKey)
        .digest();
    const signature = key.sign(hash);
    return {
        publicKey: publicKey,
        signature: signature
    }
}

const verifyKeyAndSignature = (publicKey, signature) => {
    let res = null;
    try {
        const hash = crypto.createHash('sha256')
            .update(publicKey)
            .digest();

        const key = Keypair.fromPublicKey(publicKey);
        res = key.verify(hash, signature);
    } catch (err) {
        return false;
    }
    
    return res;
}

const logout = (secret) => {
    const data = genKeyAndSignature(secret);
    data.signature = data.signature.toString('base64');

    return data;
}

const createAccount = (secrect, sequence, newPublicKey) => {
    const params = {
        address: newPublicKey
    };

    return getRawTxAndEncode(secrect, sequence, 'create_account', params);
}

const updateName = (secrect, sequence, newName) => {

    const params = {
        key: 'name',
        value: Buffer.from(newName)
    };

    return getRawTxAndEncode(secrect, sequence, 'update_account', params);
}

const updateEmail = (secrect, sequence, newEmail) => {

    const params = {
        key: 'email',
        value: Buffer.from(newEmail)
    };

    return getRawTxAndEncode(secrect, sequence, 'update_account', params);
}

const updatePicture = (secrect, sequence, photo) => {
    const params = {
        key: 'picture',
        value: Buffer.from(photo)
    };

    return getRawTxAndEncode(secrect, sequence, 'update_account', params);
}

const payment = (secrect, sequence, receiver, amount) => {
    const params = {
        address: receiver,
        amount
    };

    return getRawTxAndEncode(secrect, sequence, 'payment', params);
};

const post = (secrect, sequence, content, keys=[]) => {
    const bufKeys = keys.map((key) => {
        return Buffer.from(key);
    });

    const params = {
        content: v1.PlainTextContent.encode({
            type: 1,
            text: content.toString('utf-8')
        }),
        keys: bufKeys
    };

    return getRawTxAndEncode(secrect, sequence, 'post', params);
}

const updateFollow = (secrect, sequence, list) => {

    const list32 = list.map((item) => {
        return base32.decode(item);
    });

    const followParams = {
        addresses: list32
    };

    const params = {
        key: 'followings',
        value: v1.Followings.encode(followParams),
    };

    return getRawTxAndEncode(secrect, sequence, 'update_account', params);
}

const reaction = (secrect, sequence, object, reaction) => {
    const reactContent = {
        type: 2,
        reaction: reaction
    };

    const params = {
        object: object,
        content: v1.ReactContent.encode(reactContent)
    };

    return getRawTxAndEncode(secrect, sequence, 'interact', params);
}

export const transactionGet = {
    createAccount,
    updateName,
    updatePicture,
    payment,
    post,
    updateFollow,
    reaction,
    login,
    logout,
    verifyKeyAndSignature,
    genKeyAndSignature,
    updateEmail
};
