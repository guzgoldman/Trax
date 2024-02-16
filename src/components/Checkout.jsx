import { useState } from 'react'
import Completed from './Completed'

const Checkout = () => {
    
    const [validated, setValidated] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        confirmEmail: '',
    })
    
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            event.preventDefault()
            setShowCheckout(true)
        }
        setValidated(true)      
    }
    
    return (
        <div className="container">
            {showCheckout ? (<Completed formData={formData}/>) : (
                <div className="row justify-content-md-center">
                    <div className="col-xs-6 form-checkout">
                        <h3>Enter the requested data</h3>
                        <form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div>
                                <label className="form-label" for="formName">Name</label>
                                <input required placeholder="Enter your name" name="name" type="text" id="formName" className="form-control" value={formData.name} onChange={handleChange}/>
                                <div className=''>Please, enter your name.</div>
                            </div>
                            <div>
                                <label className="form-label" for="formLastname">Last name</label>
                                <input required placeholder="Enter your last name" name="lastname" type="text" id="formLastname" className="form-control" value={formData.lastname} onChange={handleChange}/>
                                <div className="invalid-feedback">Please, enter your last name</div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}


export default Checkout