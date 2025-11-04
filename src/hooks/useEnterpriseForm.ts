import { useState } from 'react';

// --- THIS IS THE FIX ---
// Read the new variable from your .env file
const FORM_ENDPOINT = import.meta.env.VITE_ENTERPRISE_FORMSPREE_URL;
// --- END OF FIX ---

// Define the shape of our new form data
export interface EnterpriseFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  modelType: string[];
  deployment: string;
  description: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const useEnterpriseForm = () => {
  const [formData, setFormData] = useState<EnterpriseFormData>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    industry: 'Finance',
    modelType: [],
    deployment: 'Cloud',
    description: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<EnterpriseFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentTypes = prev.modelType;
      if (checked) {
        return { ...prev, modelType: [...currentTypes, value] };
      } else {
        return { ...prev, modelType: currentTypes.filter((type) => type !== value) };
      }
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<EnterpriseFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.description) newErrors.description = 'Project description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Enterprise Lead: ${formData.companyName}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '', companyName: '', email: '', phone: '',
          industry: 'Finance', modelType: [], deployment: 'Cloud', description: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return {
    formData,
    status,
    errors,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
};