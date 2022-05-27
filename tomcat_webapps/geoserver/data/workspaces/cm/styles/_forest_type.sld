<?xml version="1.0" encoding="utf-8"?>
<StyledLayerDescriptor version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <NamedLayer>
    <Name>_forest_type</Name>
    <UserStyle>
      <Title>A teal polygon style</Title>
      <FeatureTypeStyle>
        <Rule>
          <Name>x</Name>
          <Title>ป่าเต็งรัง</Title>
          <ogc:Filter>
            <PropertyIsEqualTo>
               <PropertyName>s_fore</PropertyName>
               <Literal>ป่าเต็งรัง</Literal>
            </PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#ffffcc</CssParameter>
              <CssParameter name="fill-opacity">0.5</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#042900</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
        
        <Rule>
          <Name>a</Name>
          <Title>ป่าเต็งรังผสมป่าเบญจพรรณ</Title>
          <ogc:Filter>
            <PropertyIsEqualTo>
               <PropertyName>s_fore</PropertyName>
               <Literal>ป่าเต็งรังผสมป่าเบญจพรรณ</Literal>
            </PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#d9f0a3</CssParameter>
              <CssParameter name="fill-opacity">0.5</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#042900</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
        
        <Rule>
          <Name>b</Name>
          <Title>ป่าเบญจพรรณ</Title>
          <ogc:Filter>
            <PropertyIsEqualTo>
               <PropertyName>s_fore</PropertyName>
               <Literal>ป่าเบญจพรรณ</Literal>
            </PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#addd8e</CssParameter>
              <CssParameter name="fill-opacity">0.5</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#042900</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>

        <Rule>
          <Name>c</Name>
          <Title>ป่าสน</Title>
          <ogc:Filter>
            <PropertyIsEqualTo>
               <PropertyName>s_fore</PropertyName>
               <Literal>ป่าสน</Literal>
            </PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#78c679</CssParameter>
              <CssParameter name="fill-opacity">0.5</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#042900</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
     
        <Rule>
          <Name>d</Name>
          <Title>ป่าสนเขา</Title>
          <ogc:Filter>
            <PropertyIsEqualTo>
               <PropertyName>s_fore</PropertyName>
               <Literal>ป่าสนเขา</Literal>
            </PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#31a354</CssParameter>
              <CssParameter name="fill-opacity">0.5</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#042900</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>   
      
        <Rule>
          <Name>e</Name>
          <Title>ป่าดิบเขา</Title>
          <ogc:Filter>
            <PropertyIsEqualTo>
               <PropertyName>s_fore</PropertyName>
               <Literal>ป่าดิบเขา</Literal>
            </PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#006837</CssParameter>
              <CssParameter name="fill-opacity">0.5</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#042900</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>          
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>