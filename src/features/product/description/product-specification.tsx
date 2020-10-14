import React, { FC } from 'react';
import ProductSpecWrapper from './product-specification.style';
type ProductSpecificationProps = {
    product: any;
};
const ProductSpecification: FC<ProductSpecificationProps> = ({ product }) => {
    const specification = JSON.parse(product.specification);
    let listItems = '';
    if (specification.length) {
        listItems = specification
            .filter((spec) => {
                return spec.key != '';
            })
            .map((spec) => (
                <tr key={spec.key}>
                    <td>{spec.key}</td>
                    <td>{spec.value}</td>
                </tr>
            ));
    }

    return (
        <ProductSpecWrapper>
            <table className="table table-bordered ps-table ps-table--specification">
                <tbody>{listItems}</tbody>
            </table>
        </ProductSpecWrapper>
    );
};

export default ProductSpecification;
