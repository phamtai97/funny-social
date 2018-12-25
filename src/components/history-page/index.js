import React, {Component} from 'react'
import './history-page.css'
import { Table} from 'antd';
import moment from 'moment';
import helpers from '../../helpers/helpers';

const columns = [
    {
        title: 'Sequence',
        dataIndex: 'sequence',
        key: 'sequence',
        width: 120,
        sorter: (a, b) => a.sequence - b.sequence,
    }, 
    {
        title: 'Name Sender',
        dataIndex: 'nameSender',
        key: 'nameSender',
        width: 200,
        render: text => <a href="javascript:;">{text}</a>,
    }, 
    {
        title: 'Address Sender',
        dataIndex: 'addressSender',
        key: 'addressSender',
        width: 400,
    },
    {
        title: 'Name Receiver',
        dataIndex: 'nameReceiver',
        key: 'nameReceiver',
        width: 200,
        render: text => <a href="javascript:;">{text}</a>,
    }, 
    {
        title: 'Address Receiver',
        dataIndex: 'addressReceiver',
        key: 'addressReceiver',
        width: 400,
    },
    {
        title: 'Money',
        dataIndex: 'money',
        key: 'money',
        width: 120,
        sorter: (a, b) => a.money - b.money,
    },
    {
        title: 'Time transaction',
        dataIndex: 'timeTransaction',
        key: 'timeTransaction',
        width: 200,
        sorter: (a, b) => a.timeTransaction - b.timeTransaction,
    }
    ];

const data = [];
const numberPage = 10000;
for (let i = 0; i < numberPage; i++){
    data.push({
        key: '1',
        sequence: i,
        nameSender: "Tan Tai",
        addressSender: '123456789',
        nameReceiver: "Tri",
        addressReceiver: '987654321',
        money: 10000000,
        timeTransaction: moment().format(helpers.FORMAT_DATE),
    })
}

class HistoryPage extends Component {
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            // filteredInfo: filters,
            // sortedInfo: sorter,
        });
    }
    render() {
        return(
            <div className='container-history-page'>
                <div className='wrapper-content'>
                    <div className='title'>
                        History Transaction
                    </div>
                    <div className='container-table'>
                        <Table 
                            columns={columns}
                            dataSource={data} 
                            pagination={{pageSize: 50, total: numberPage}}
                            scroll={{ y: 600 }} 
                            onChange={this.handleChange}
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default HistoryPage
