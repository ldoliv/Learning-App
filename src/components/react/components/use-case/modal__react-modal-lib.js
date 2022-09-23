import React from "react";
import ReactModal from 'react-modal';
import '../components/ReactModal/ReactModal.styles.scss';


ReactModal.setAppElement('#root');

const inlineStyles = {
	overlay: {
		transitionDuration: '300ms'
	}
}

export default function UseModal() {

	const [showModal, setShowModal] = React.useState(false);

	
	function handleAfterOpen() {
		console.log('after open');
	}

	function handleAfterClose() {
		console.log('after close');
	}

	function handleRequestClose() {
		console.log('request close');
		setShowModal(false)
	}

	return (
		<>
			<div>
				<button onClick={() => setShowModal(true)}>Show Modal</button>
			</div>

			<div id="modal-container"></div>


			<ReactModal 
				overlayClassName="custom-modal"
				className="content"

				isOpen={showModal}
				// onAfterOpen={handleAfterOpen}
				// onAfterClose={handleAfterClose}
				onRequestClose={handleRequestClose}
				closeTimeoutMS={parseInt(inlineStyles.overlay.transitionDuration)}
				style={inlineStyles}
				
				// parentSelector={() => document.querySelector('#root')}
				parentSelector={() => document.querySelector('#modal-container')}			
			>
				<div className="row gx-2 align-items-center">
					<div className="col-auto">
						<div>Modal content</div>
						<button onClick={() => setShowModal(false)}>Close modal</button>
					</div>
				</div>
			</ReactModal>
			
			
			{/* <Modal
				className="info"
				isOpen={showModal}
				title={`Modal title`}
				// closeAfterMs={props.closeAfterMs}
				// afterClose={props.afterClose}
				
				// containerId={'modal-container'}
				containerId={'root'}
		
				onClose={() => setShowModal(false)}

				content={
					<div className="row gx-2 align-items-center">
						<div className="col-auto">
							<div>Modal content</div>
							<button onClick={() => setShowModal(false)}>Close modal</button>
						</div>
					</div>
				} /> */}
		</>
	)
}