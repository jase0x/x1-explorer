import getReadableTitleFromAddress, { AddressPageMetadataProps } from '@utils/get-readable-title-from-address';
import { Metadata } from 'next/types';

import NFTAttributesPageClient from './page-client';

type Props = Readonly<{
    params: {
        address: string;
    };
}>;

export async function generateMetadata(props: AddressPageMetadataProps): Promise<Metadata> {
    return {
        description: `Attributes of the Metaplex NFT with address ${props.params.address} on X1 Network ™`,
        title: `Metaplex NFT Attributes | ${await getReadableTitleFromAddress(props)} | X1 Network ™`,
    };
}

export default function MetaplexNFTAttributesPage(props: Props) {
    return <NFTAttributesPageClient {...props} />;
}
