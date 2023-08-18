import { useRef } from 'react';

export default function useGenerateId() {
  const refId = useRef(1);
  const generateId = () => {
    return (refId.current = refId.current + 1);
  };
  return {
    generateId,
  };
}
