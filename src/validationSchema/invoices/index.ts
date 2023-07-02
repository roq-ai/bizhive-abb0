import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
