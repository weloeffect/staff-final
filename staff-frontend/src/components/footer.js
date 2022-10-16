import React, { Component } from 'react'
import "../css/footer.css"
export class Footer extends Component {
  render() {
    return (
      <>
      <div className='footer  text-center '>
      
      <div className='mt-5 bg-muted'>
        {/* <img src="https://yenettacode.com/wp-content/uploads/2022/04/YenettaWebBlack-2.png" alt="logo" className='logo' /> */}
        <img src="https://cdn-icons-png.flaticon.com/128/4598/4598130.png" alt="" className='logo'/>
         <span> 
            &copy;{new Date().getFullYear()}
        </span>
        </div>  
      </div>
      </>
    )
  }
}

export default Footer