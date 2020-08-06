import React from 'react';

const PartialSpecification = (props) => {
    const specification = JSON.parse(props.product.specification);
    let listItems = '';
    if (specification.length) {
        listItems = specification.filter((spec) => {
            return spec.key != '';
        }).map((spec) => (
            <tr key={spec.key}>
                <td>{spec.key}</td>
                <td>{spec.value}</td>
            </tr>
        ));
    }
  
    return (
        <div className="table-responsive">
            <table className="table table-bordered ps-table ps-table--specification">
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>
    );
};

export default PartialSpecification;
