// import clsx from 'clsx';
// import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({items}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => {
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                })}
                
            </tbody>
        </table>

    )
}