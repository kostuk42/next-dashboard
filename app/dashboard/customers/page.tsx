import React, {Suspense} from 'react';
import {Metadata} from "next";
import {fetchFilteredCustomers} from "../../lib/data";
import CustomersTable from "../../ui/customers/table";

export const metadata: Metadata = {
    title: 'Customers'
};

const Page = async ({searchParams,} : {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
    return (
        <CustomersTable customers={customers}/>
    );
};

export default Page;
