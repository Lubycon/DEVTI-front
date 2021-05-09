import { AmplitudeClient } from 'amplitude-js';

let amplitudeInstance: AmplitudeClient | null = null;

export const initAmplitude = () => {
  if (typeof window !== undefined) {
    import('amplitude-js')
      .then((ampPackage) => {
        amplitudeInstance = ampPackage.getInstance();
        return amplitudeInstance.init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY as string);
      })
      .catch(() => null);
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendAmplitudeData = (event: string, eventProperties?: any) => {
  if (amplitudeInstance == null) {
    return;
  }
  amplitudeInstance.logEvent(event, eventProperties);
};
