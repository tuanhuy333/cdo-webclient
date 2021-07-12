


import pic from '../assets/pic.jpg';

import Avatar from "react-avatar-edit";
import React, { useState, Image } from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const EditAvatar = ({ parentCallback }) => {
    const [preview, setPreview] = useState(pic);

    // truyền state từ Child sang Parent
    React.useEffect(() => {
        if (parentCallback) {
            parentCallback(preview);
        }
    }, [preview])




    const [pictures, setPictures] = useState();
    const [picturesPreview, setPicturesPreview] = useState(null);

    function onClose() {
        //setPreview(null);
    }
    function onCrop(pv) {
        //console.log('====================================');
        //console.log(pv);
        //console.log('====================================');
        setPreview(pv);
    }

    function onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 2000000) {
            alert("File is too big!");
            elem.target.value = "";
        }
    }
    function onImageLoad(i) {
        console.log("image", i)
    }


    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const imageHandler = (e) => {
        e.preventDefault();
        console.log("File", e)
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setPictures(e.target.files[0]);
            setPicturesPreview(reader.result);

            setPreview(reader.result)

            openModal()
        };

        reader.readAsDataURL(file);
    };
    return (
        <div>

            <img src="https://drive.google.com/uc?export=view&id=1puvVTeQsH9zJUa0HMHXTnrLOmTwH1EwJ" width={300} height={200} />

            <input
                type="file"
                accept="image/*"
                name="image-upload"
                id="image-upload"
                style={{ display: "none" }}
                onChange={imageHandler}
            />
            <label for="image-upload">Change Avatar </label>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Avatar
                    width={350}
                    height={250}
                    onCrop={onCrop}
                    onClose={onClose}
                    onBeforeFileLoad={onBeforeFileLoad}
                    onImageLoad={onImageLoad}
                    src={preview}
                >
                    <img src={preview} alt="Preview" />
                </Avatar>
                <button onClick={closeModal}>OK</button>
            </Modal>

            {preview && (
                <>
                    <img src={preview} width={150} height={150} alt="Preview" />
                    <a href={preview} download="avatar">
                        Download image
                    </a>
                </>
            )}

        </div>
    );
}
export default EditAvatar;