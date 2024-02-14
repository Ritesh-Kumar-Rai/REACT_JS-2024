

const Footer = (props) => {
  return (
    <footer className={`d-flex flex-wrap align-items-center justify-content-center ${props.isdark ? "bg-dark text-white":null} py-4`}>
        <h5>RITESH KUMAR RAI</h5>
    </footer>
  )
}

export default Footer