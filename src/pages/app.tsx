import React, { FC } from "react"
import { Router as MyRouter, RouteComponentProps } from "@reach/router"
import ModalPage from "../App/features/ModalPage"
import Todo from "../App/features/Todo"

interface IProps extends RouteComponentProps {}

const Router: FC<IProps> = ({ location }) => {
  return (
    <MyRouter>
      <Todo path="/app/todo">
        <ModalPage path=":result" />
      </Todo>
    </MyRouter>
  )
}

export default Router
