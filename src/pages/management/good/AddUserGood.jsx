import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Textarea, Button, ButtonGroup, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import axios from "axios";

const dropzoneStyles = {
    border: "2px dashed #e0e4e9",
    borderRadius: "4px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
};

const AddUserGood = () => {
    return <div>AddUserGood</div>;
};

export default AddUserGood;
