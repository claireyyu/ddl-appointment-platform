import { BaziRequestData } from '../types/bazi';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getPaipan = async (bodyData: BaziRequestData) => {
  const response = await fetch(`${BASE_URL}/v1/paipan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  });
  if (!response.ok) throw new Error('Failed to fetch Paipan data');
  return response.json();
};

export const getCesuan = async (bodyData) => {
  const response = await fetch(`${BASE_URL}/v1/cesuan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  });
  if (!response.ok) throw new Error('Failed to fetch Cesuan data');
  return response.json();
};

export const getJingpan = async (bodyData) => {
  const response = await fetch(`${BASE_URL}/v1/jingpan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  });
  if (!response.ok) throw new Error('Failed to fetch Jingpan data');
  return response.json();
};
