import React from 'react';
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function CModal({ Title, Body, Show, SaveText, CloseText, handleSave, handleClose }) {
    
    const _handleClose = () => {
        handleClose();
    }

    const _handleSave = () => {
        handleSave();
    }
    
    return (
        <>
            <Modal show={Show} onHide={_handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {Title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={_handleClose}>
                        {CloseText}
                    </Button>
                    <Button variant="primary" onClick={_handleSave}>
                        {SaveText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


CModal.defaultProps = {
    Title: "",
    Body: <></>,
    Show: true,
    handleClose: () => {},
    handleSave: () => {},
    CloseText: "Close",
    SaveText: "Save Changes"
};

CModal.propTypes = {
    Title: PropTypes.string,
    Body: PropTypes.element,
    Show: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func,
    CloseText: PropTypes.string,
    SaveText: PropTypes.string
}

export default CModal;