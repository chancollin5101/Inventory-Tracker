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
  text-align: center;
  padding: 10px;
`

const ModalTitle = styled.div`
  margin: 0;
`
const ModalBody = styled.div`
  padding: 40px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  align-items: left;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`
const ModalClose = styled.button`
  float: right;
  margin-top: -20px;
  background-color: white;
  color: grey;
  border: none;
`

const SubmitButton = styled.button`
  margin-top: 20px;
  background-color: #71b406;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-weight:bold;
`

const ModalForm = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <Modal onClick={props.onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{props.title}</ModalTitle>
          <ModalClose onClick={props.onClose}>X</ModalClose>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={props.onSubmit}>
            {props.children}
            <ModalFooter>
              <SubmitButton type="submit">Submit</SubmitButton>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalForm