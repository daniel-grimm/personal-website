import ado from '../../../assets/images/ado.png';
import angular from '../../../assets/images/angular.png';
import aws from '../../../assets/images/aws.png';
import azure from '../../../assets/images/azure.png';
import csharp from '../../../assets/images/csharp.png';
import dotnet from '../../../assets/images/dotnet.png';
import github from '../../../assets/images/github.png';
import jira from '../../../assets/images/jira.png';
import nextjs from '../../../assets/images/nextjs.png';
import react from '../../../assets/images/react.png';
import redhat from '../../../assets/images/redhat.png';
import sql from '../../../assets/images/sql.png';
import terraform from '../../../assets/images/terraform.png';
import vue from '../../../assets/images/vue.png';
import { Image } from '../../../components/Image/Image.style';
import { ImageGallery } from '../../../components/ImageGallery/ImageGallery';
import { useIsMobileView } from '../../../hooks/useIsMobileView';

export const Gallery: React.FC = () => {
    const isDesktopView = useIsMobileView();

    return (
        <>
            <ImageGallery>
                <Image src={react} width='90px' height='80px' />
                <Image src={csharp} width='70px' height='80px' />
                <Image src={dotnet} width='80px' height='80px' />
                <Image src={sql} width='80px' height='80px' />
                <Image src={github} width='80px' height='80px' />
                <Image src={angular} width='80px' height='80px' />
                <Image src={azure} width='100px' height='80px' />
                <Image src={aws} width='120px' height='80px' />
            </ImageGallery>
            {isDesktopView && (
                <>
                    <ImageGallery>
                        <Image src={jira} width='80px' height='80px' />
                        <Image src={terraform} width='80px' height='80px' />
                        <Image src={nextjs} width='80px' height='80px' />
                        <Image src={vue} width='80px' height='80px' />
                        <Image src={redhat} width='90px' height='80px' />
                        <Image src={ado} width='80px' height='80px' />
                    </ImageGallery>
                </>
            )}
        </>

    )
}

export default Gallery;