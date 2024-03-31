import clsx from 'clsx';
import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({items}) {
    return (
        <table className={css.container}>
            <thead className={css.title}>
                <tr>
                    <th className={css.dataText}>Type</th>
                    <th className={css.dataText}>Amount</th>
                    <th className={css.dataText}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.body}>
                {items.map((item) => {
                    return (
                        <tr className={clsx(css.text, css.dataTextColor)} key={item.id}>
                            <td className={clsx(css.dataText, css.dataTextType)}>{item.type}</td>
                            <td className={css.dataText}>{item.amount}</td>
                            <td className={css.dataText}>{item.currency}</td>
                        </tr>
                    );
                }
                    
                )}
                
            </tbody>
        </table>

    )
}