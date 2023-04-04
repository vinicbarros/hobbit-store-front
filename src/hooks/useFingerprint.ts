export default function useFingerprint() {
  const fingerprintData = JSON.parse(
    localStorage.getItem("@cart/fingerprint") as string
  )?.fingerprint;

  return fingerprintData as string;
}
