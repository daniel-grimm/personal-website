import { ImageGallery } from "../../../components/ImageGallery/ImageGallery";
import azureFundamentals from "../../../assets/images/azurefundamentals.png";
import azureDataFundamentals from "../../../assets/images/azuredatafundamentals.png";
import awsFundamentals from "../../../assets/images/awscloudpractitioner.png";
import azureAdmin from "../../../assets/images/azureadministratorassociate.png";
import azureDevops from "../../../assets/images/azuredevopsexpert.png";
import azureArchitect from "../../../assets/images/azuresolutionsarchitect.png";
import { Image } from '../../../components/Image/Image.style';

export const Certifications: React.FC = () => {

    return (
        <>
            <ImageGallery>
                <Image src={azureArchitect} width='120px' height='120px' />
                <Image src={azureDevops} width='120px' height='120px' />
                <Image src={azureAdmin} width='120px' height='120px' />
                <Image src={azureFundamentals} width='120px' height='120px' />
                <Image src={azureDataFundamentals} width='120px' height='120px' />
                <Image src={awsFundamentals} width='120px' height='120px' />
            </ImageGallery>
        </>
    );
}

export default Certifications;