import {useState, useCallback} from 'react';
import {Card, ResourceList, Thumbnail, ResourceItem, Text} from '@shopify/polaris';
import {Button, Modal, TextContainer} from '@shopify/polaris';
import { Markup } from 'interweave';
import React from 'react'

const ProductList = (props) => {
  const {products} = props;

  const [pid, setPid] = useState(0);
  const [active, setActive] = useState(false);
  const handleChange = () => setActive(!active);

  const titleBar = ` Delete the products: ${pid}`

  console.log(pid);


  if(!products || products.length === 0){
    return (
      <Card>
        <p> No products available </p>
      </Card>
    )
  }
  return (
    <>
      <Modal
        open={active}
        onClose={handleChange}
        title={titleBar}
        primaryAction={{
          content: 'Delete',
          onAction: () => {
              fetch(`/deleteProduct?id=${pid}`).then(res => console.log(res));
          },
        }}
      >
        <Modal.Section>

        </Modal.Section>
      </Modal>

      <Card>
        <ResourceList
          resourceName={{singular: 'Product', plural: 'Products'}}
          items={products}
          renderItem={(product) => {
            const {id, title, body_html} = product;
            const url = product.image.src;
            const media =  <Thumbnail size="large" source={url} alt={title} />;

            return (
              <ResourceItem
                id={id}
                media={media}
                accessibilityLabel={`View details for ${title}`}
                shortcutActions={{
                  content: 'Delete Item',

                  onAction: () =>{
                    setPid(id);
                    handleChange();

                  }
                }}
              >
                <Text variant="bodyMd" fontWeight="bold" as="h3">
                  {title}
                </Text>
                <div> <Markup content={body_html}></Markup> </div>
              </ResourceItem>
            );
          }}
        />
      </Card>

    </>
  );
}

export default ProductList