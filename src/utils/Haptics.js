import { Haptics, ImpactStyle } from '@capacitor/haptics';
const hapticsImpactMedium = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
};
export default hapticsImpactMedium;