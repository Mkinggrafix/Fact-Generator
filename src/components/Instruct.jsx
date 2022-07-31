import { Link } from 'react-router-dom'

const Instruct = () => {
  return (
    <div className='instruct'>
        <h4>Instruction: </h4>
        <p>Enter number to generate facts. You can also generate facts based on Math, Date and Year by selecting from the selection box.</p>

        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Instruct