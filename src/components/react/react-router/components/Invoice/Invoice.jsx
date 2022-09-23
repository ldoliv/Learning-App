
import {useParams, useNavigate} from 'react-router-dom';
import {getInvoice, deleteInvoice} from '../../data';


export function Invoice() {

	const navigate = useNavigate();
	const params = useParams();
	const invoice = getInvoice(parseInt(params.invoiceId, 10));

	if (!invoice) {
		return <div>No result.</div>
	}

	return (
		<div className="py-4">
			<h2>Total Due: {invoice.amount}</h2>
			<p>{invoice.name}: {invoice.number}</p>
			<p>Due Date: {invoice.due}</p>
			<p>
				<button className="btn btn-danger" onClick={() => {
					deleteInvoice(invoice.number);
					navigate(-1);
				}}>Delete</button>
			</p>
		</div>
	)
}