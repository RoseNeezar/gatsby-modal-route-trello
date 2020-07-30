import React, { FC, useState, useEffect } from "react"
import { RouteComponentProps, navigate } from "@reach/router"
import Modal from "react-modal"

interface IModal {
  isModal?: boolean
}
interface IProps extends IModal, RouteComponentProps {}

const ModalPage: FC<IProps> = ({ location, uri, path, isModal }) => {
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    if (location?.state) {
      setToggle(true)
    }
  }, [location?.state])

  const HandleClose = () => {
    setToggle(false)
    navigate("/app/todo")
  }
  return (
    <Modal
      isOpen={toggle}
      onRequestClose={() => HandleClose()}
      ariaHideApp={false}
    >
      <h1> Hello - {uri} </h1>
    </Modal>
  )
}

export default ModalPage
