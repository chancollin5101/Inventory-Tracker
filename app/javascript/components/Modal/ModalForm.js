import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  with: 500px;
  background-color: #fff;
`

const ModalHeader = styled.div`
  padding: 10px;
`

const ModalFooter = styled.div`
  padding: 10px;
`

const ModalTitle = styled.div`
  margin: 0;
`
const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  align-items: left;
  text-align: left;
  display: block;
`
const ModalClose = styled.button`
  float: right;
  margin-top: -20px;
  background-color: white;
  color: grey;
  border: none;
`

const ModalForm = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <Modal onClick={props.onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Create new product for tracking</ModalTitle>
          <ModalClose onClick={props.onClose}>X</ModalClose>
        </ModalHeader>
        <ModalBody>
          {props.children}
        </ModalBody>
        <ModalFooter>
          <button className="form-control" type="submit">Submit</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalForm