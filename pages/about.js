import {Page, Layout, Card} from '@shopify/polaris';
import React from 'react'

const about = () => {



  return (
      <Page>

          <Layout.AnnotatedSection
          title="Products"
          description="List of Products in your store">
            <Card title="Online store dashboard" sectioned>
              <p>List of products</p>
            </Card>
          </Layout.AnnotatedSection>

      </Page>
  )
}

export default about