@bs.module("antd") @react.component
external make: (
  ~_type: [#primary | #link | #subtle | #default | #ghost]=?,
  ~children: React.element=?,
  ~onClick: ReactEvent.Mouse.t => unit=?,
) => React.element = "Button"
