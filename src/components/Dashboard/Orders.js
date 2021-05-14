import React, {useContext}from 'react';





const Orders = (props) => {
    const orderContext =  useContext(AllOrders);

    let date = new Date().getFullYear;


    const total = 0;
    
    const getTotalAmount=()=>{
		return orderContext.reduce((prevValue,currentValue)=> prevValue+currentValue.price,0);
	}
    return (
        <div className='Order' >
            <Table striped bordered hover>
            <thead>
                    <tr>
                        <th>#id</th>
                        <th>Date</th>
                        <th>Customer </th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.Date}</td>
                        <td>{props.firstname, props.lastname}</td>
                        <td>{props.address}</td>
                        <td>{props.price}</td>
                        <td>{props.amount}</td>
                        <td>{getTotalAmount}</td>
                        <td>
                        <DropdownButton id="dropdown-basic-button" title="Sign Up"> 
              <Dropdown.Item >Shipped</Dropdown.Item>
              <Dropdown.Item >on the way</Dropdown.Item>
              <Dropdown.Item > Delivered</Dropdown.Item>
            </DropdownButton>
                        </td>

                        
                    </tr>
                    
                    
                </tbody>
            </Table>


        </div>
    )
}

export default Orders;

