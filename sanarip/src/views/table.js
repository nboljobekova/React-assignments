import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getTransactions, deleteTransaction } from '../actions/TransactionsActions';
import { getBanks } from '../actions/BanksActions';


const TransactionsTable = () => {
    const dispatch = useDispatch();
    const banks = useSelector(state => state.banks.data)
    const transactions = useSelector(state => state.transactions.data)
    const [id, setId] = useState(0);

    useEffect(() => {
        dispatch(getBanks());
        dispatch(getTransactions());
    }, [dispatch])

    const handleDeleteTransaction = id => {
        dispatch(deleteTransaction(id));
        dispatch(getTransactions());
    }

    return (
        <div className="table">
            <h2 className='text-center mb-5'>Таблица</h2>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Сумма</th>
                        <th>Банк</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                { banks ? (
                    <tbody>
                        {transactions.map(item => {
                            const bankName =  banks.find(b => b.id === item.bankId).name
                            return (
                                <tr key={item.id}>
                                    <td>{item.amount}</td>
                                    <td>{bankName}</td>
                                    <td className="table-item-delete" onClick={(e) => handleDeleteTransaction(item.id)}>Удалить</td>
                                </tr>
                            )}
                        )}
                    </tbody>
                ) : null}
            </Table>

        </div>
    )
}

export default TransactionsTable