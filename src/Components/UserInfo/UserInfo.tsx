import type { UserInfoProps , Users } from '../Inteerface'
import {useForm} from "react-hook-form"
import style from './UserInfo.module.css'



function UserInfo( {title , placeholderOne , placeholderTwo , placeholderThree, 
    placeholderFour , placeholderFive , placeholderSix , 
    button , showButton = true , readOnly = false , src , showImg = false ,
    valueOne , valueTwo , valueThree , valueFour , valueFive , valueSix , onSubmit}:UserInfoProps & { onSubmit?: (data: Users) => void }) {



    let{ register, handleSubmit, formState:{errors}}= useForm<Users>()

  return (
    <>
      <div className={`p-3 vh-100 ${style.main}`}>
        <h1>
          {title}
        </h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit || (() => {}))} className={`p-5 ${style.container}`} >
          {showImg && (
            <div className={style.img}>
              <img src={src} alt="user-image" className='rounded-circle'/>
            </div>
          )}
          <div className="row my-4">
            <div className="col-md-6">
              <label>First Name</label>
              <input className="form-control" type="text" placeholder={placeholderOne} defaultValue={valueOne} 
              readOnly={readOnly} {...register("firstName", {required:"this field is required!!"})}/>
              {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
            </div>
            <div className="col-md-6">
              <label>Last Name</label>
              <input className="form-control" type="text" placeholder={placeholderTwo} defaultValue={valueTwo}
              readOnly={readOnly} {...register("lastName", {required:"this field is required!!"})}/>
              {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">
              <label>Email</label>
              <input className="form-control" type="text" placeholder={placeholderThree} defaultValue={valueThree} 
              readOnly={readOnly} {...register("email", {required:"this field is required!!" , pattern:{
                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message :"invalid email!!"
              }})}/>
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="col-md-6">
              <label>Age</label>
              <input className="form-control" type="text" placeholder={String(placeholderFour)} defaultValue={valueFour}
              readOnly={readOnly} {...register("age", {required:"this field is required!!" , min:{value:16 , message: "user is under the allowed age"}})}/>
              {errors.age && <span className="text-danger">{errors.age.message}</span>}
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6">
              <label>Phone Number</label>
              <input className="form-control" type="text" placeholder={placeholderFive} defaultValue={valueFive}
              readOnly={readOnly} {...register("phone", {required:"this field is required!!"})}/>
              {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
            </div>
            <div className="col-md-6">
              <label>Birth Date</label>
              <input className="form-control" type="text" placeholder={placeholderSix} defaultValue={valueSix}
              readOnly={readOnly} {...register("birthDate", {required:"this field is required!!"})}/>
              {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}
            </div>
          </div>

            {showButton && (
            <div className="my-5 text-center">
                <button className="btn btn-warning text-white w-50 ">
                {button}
                </button>
            </div>
            )}

        </form>
      </div>

    </>    
  )
}

export default UserInfo