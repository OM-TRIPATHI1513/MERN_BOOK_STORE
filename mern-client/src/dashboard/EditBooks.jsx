import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from "react-router-dom";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL} = useLoaderData();


  const bookcategories = [ 
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Romance",
  "History",
  "Biography",
  "Mistery",
  "Science",
  "Fantasy",
  "Horror",
  "Comedy",
  "Thriller",
  "Programming",
  "Drama",
  "War",
  "Music",
  "Autobiography",
  "Bibliography",
  "Buisness",
  "Sanatan-Religion",
 ]

 const [selectedBookCategory, setSelectedBookCategory] = useState(bookcategories[0]);

 const handleChangeSelectedValue = (e) => {
  setSelectedBookCategory(e.target.value);
 }

 const handleUpdate = (e) => {
  e.preventDefault();
  const form = e.target;

  const bookTitle = form.bookTitle.value;
  const authorName = form.authorName.value;
  const imageUrl = form.imageUrl.value;
  const category = form.categoryName.value;
  const bookDescription = form.bookDescription.value;
  const bookPDFURL = form.bookPDFURL.value;
  const updateBookObj = {
    bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL
  }

  // Update data of book from the database
  fetch(`http://localhost:5000/book/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateBookObj)
  })
  .then(res => res.json()).then(data => {
    alert("Book updated successfully!")
  });

 }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book</h2>

      <form  onSubmit={handleUpdate} className="flex lg:w-[1100px] flex-col flex-wrap gap-4">


    {/*  First Row    */}

      <div className='flex gap-8'>


      <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label
          htmlFor="bookTitle"
          value="Book Title"
        />
      </div>
      <TextInput
        id="bookTitle"
        name='bookTitle'
        placeholder="Book Title"
        required
        type="text"
        defaultValue={bookTitle}
      />
      </div>
      
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label
          htmlFor="authorName"
          value="Author Name"
        />
      </div>
      <TextInput
        id="authorName"
        name='authorName'
        placeholder="Author Name"
        required
        type="text"
        defaultValue={authorName}
      />
      </div>

      </div>


    {/*  Second Row    */}


      <div className='flex gap-8'>


      <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label
          htmlFor="imageUrl"
          value="Image url"
        />
      </div>
      <TextInput
        id="imageUrl"
        name='imageUrl'
        placeholder="Image url"
        required
        type="text"
        defaultValue={imageUrl}
      />
      </div>
      
      <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label
              htmlFor="inputState"
              value="Book Category"
            />
          </div>
          <select
            id="inputState"
            name='categoryName'
            className='w-full rounded'
            onChange={handleChangeSelectedValue}
            value={selectedBookCategory}
          >
            {bookcategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
      </div>

      </div>

    {/*  Third Row    */}

    <div>
        <div className="mb-2 block">
          <Label
            htmlFor="bookDescription"
            value="Summary of Book"
          />
        </div>
        <Textarea
          id="bookDescription"
          name='bookDescription'
          placeholder="Description of Book...."
          required
          type="text"
          rows={6}
          defaultValue={bookDescription}
        />
    </div>

    {/*  Book PDF Link    */}

    <div>
        <div className="mb-2 block">
          <Label
            htmlFor="bookPDFURL"
            value="Book PDF URL"
          />
        </div>
        <TextInput
          id="bookPDFURL"
          placeholder="Book PDF URL"
          name='bookPDFURL'
          required
          type="text"
          defaultValue={imageUrl}
        />
      </div>

      <Button type="submit" className='mt-5 lg:w-1/3'>
        Update Book
      </Button>


       </form>
    </div>
  )
}

export default EditBooks
