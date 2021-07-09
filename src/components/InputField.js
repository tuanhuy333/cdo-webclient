import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

InputField.propTypes = {};

function InputField(props) {
        console.log('PROPS ', props)
        const { field, form, label, placeholder } = props;
        const { name, value, onChange, onBlur } = field;
        return (
                <>
                        <Form.Item label={label} name={name} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} >
                                <Input />
                                 {/* <p>{form.errors}</p>  */}
                        </Form.Item>
                </>
        );
} export default InputField;