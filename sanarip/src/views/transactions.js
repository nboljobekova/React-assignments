import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getBanks } from '../actions/BanksActions';
import { addTransaction } from '../actions/TransactionsActions';

const Transactions = () => {
    const dispatch = useDispatch();
    const banks = useSelector(state => state.banks.data)
    const [sum, setSum] = useState(0);
    const [bank, setBank] = useState(null);

    
    useEffect(() => {
        dispatch(getBanks());
    }, [dispatch])

    const handleAddTransaction = e => {
        e.preventDefault();
        const dataToSend = {
            amount: Number(sum),
            bankId: banks.find(b => b.name === bank).id
        }
        dispatch(addTransaction(dataToSend))
    }

    return (
        <div className="transactions">
            <h2 className='text-center mb-5'>Транзакции</h2>
            <Form className='transactions-form' onSubmit={handleAddTransaction}>
                <Row>
                    <Col xs={5}>
                        <Form.Label>Сумма</Form.Label>
                        <Form.Control type="number" placeholder="Введите сумму" onChange={e => setSum(e.target.value) }/>
                    </Col>
                    <Col xs={5}>
                        <Form.Label>Банк</Form.Label>
                        <Form.Select onChange={e => setBank(e.target.value)}>
                            <option className="transactions-form__placeholder">Выберите банк</option>
                            {banks.map(bank => 
                                <option key={bank.id}>{bank.name}</option>
                            )}
                        </Form.Select>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-end'>
                        <Button variant="danger" type="submit">Добавить</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Transactions;