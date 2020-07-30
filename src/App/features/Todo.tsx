import React, { FC } from "react"
import { RouteComponentProps, Link } from "@reach/router"
const currencies = ["CAD", "USD", "GBP", "MXN", "AUD", "EUR", "NOK"]

interface IProps extends RouteComponentProps {}

const Todo: FC<IProps> = ({ children }) => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#39f" }}>
      <ul>
        {currencies.map((res, index) => (
          <li key={index} style={{ backgroundColor: "purple", margin: "2rem" }}>
            <Link to={`${res}`} state={{ isModal: true }}>
              <div>{res}</div>
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  )
}

export default Todo
