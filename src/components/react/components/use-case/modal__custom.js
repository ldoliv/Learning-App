import React from "react";
import Modal from "../components/Modal";


const modalStyles = {
	transitionDuration: '200ms'
}

export default function UseModal() {

	const [showModal, setShowModal] = React.useState(false);


	return (
		<>
			<div>
				<button onClick={() => setShowModal(true)}>Show Modal</button>
			</div>

			<div id="modal-container"></div>
			
			<Modal
				className="info"
				isOpen={showModal}
				title={`Modal title`}
				
				// parentSelector='#modal-container'
				parentSelector='#root'
		
				onClose={() => setShowModal(false)}
				delayBeforeRemove={500}

				content={
					<div className="row gx-2 align-items-center">
						<div className="col-auto">
							<div>Modal content</div>
							<button onClick={() => setShowModal(false)}>Close modal</button>
						</div>
					</div>
				} />
		</>
	)
}