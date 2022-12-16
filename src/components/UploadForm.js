// TODO: answer here
import axios from "axios"
import React, {useState } from "react"
import { API_URL } from "../api/config";
export default function UploadForm({onSubmit}) {
  // TODO: answer here
  const [content, setCaption] = useState("")
  const [image, setImage] = useState(null)

  const handleChangeCaption = (e) => {
    setCaption(e.target.value)
  }

  const handleChangeImage = (e) => {
    setImage(e.target.files[0])
  }

  const submitAction = async () => {
    const formData = new FormData()

    formData.append("content", content)
    formData.append("image", image)

    await axios.post(`${API_URL}/post/create`, formData, {
      withCredentials: true,
    })

    onSubmit()
  }
  return (
    <section className="form-upload-component">
      <form className="form-wrapper" aria-label="Upload Form"
      onSubmit={ () => {
        submitAction()
      }} encType="multipart/form-data">
        <div className="form-control image-input">
          <label className="form-label" htmlFor="image">Image</label>
          <input className="form-input" type="file" id="image" name="image" aria-label="Image Input" accept="image/png, image/jpg, image/gif"
          onChange={handleChangeImage} 
          />
        </div>
        <div className="form-control caption-input">
          <label className="form-label" htmlFor="caption">Caption</label>
          <textarea className="form-input" id="caption" name="caption" aria-label="Caption Input"
          onChange={handleChangeCaption}
          ></textarea>
        </div>
        <button className="form-button" type="submit" aria-label="Submit Button">Post</button>
      </form>
    </section>
  )
}