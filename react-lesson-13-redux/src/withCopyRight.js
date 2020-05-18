import React, { Component } from 'react'

const withCopy = (YourComponent) =>{
    return class withCopyright extends Component{
        render() {
            return (
                <>
                    <YourComponent />
                    <div>
                        &copy; 2019 &emsp; ｌｉｎｋ   
                    </div>
                </>
            )
        }
    }
}

export default withCopy;