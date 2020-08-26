@react.component
let make = (~name) =>
  <AntButton _type={#primary}> {("Hello " ++ name ++ "!")->ReasonReact.string} </AntButton>
