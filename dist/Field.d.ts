/// <reference types="react" />
import * as React from 'react';
import { FormikProps } from './formik';
export declare const Field: React.SFC<any>;
export interface FieldProps {
    field: {
        onChange: (e: React.ChangeEvent<any>) => void;
        onBlur: (e: any) => void;
        value: any;
    };
    form: FormikProps<any>;
}
