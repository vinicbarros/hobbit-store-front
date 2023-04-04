/* eslint-disable react/require-default-props */
import { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { Navigate, Outlet } from "react-router-dom";
import useFingerprint from "../hooks/useFingerprint";
import { getFingerprint } from "../services/cartService";

export default function FingerprintRoute({
  children,
}: {
  children?: React.ReactElement;
}) {
  const mutation = useMutation(() => getFingerprint());
  const fingerprint = useFingerprint();

  const handleFingerprint = async () => {
    try {
      const data = await mutation.mutateAsync();
      localStorage.setItem("@cart/fingerprint", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!fingerprint) {
    handleFingerprint();
    return children || <Outlet />;
  }

  return children || <Outlet />;
}
