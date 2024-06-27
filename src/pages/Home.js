import { useEffect, useState } from "react"
import Menu from "./Menu"
import { Panel, Grid, Row, Col, Heading } from "rsuite"
import { Statistic } from "antd";
import Chart from "react-apexcharts";

function Home() {
  useEffect(() => {
    localStorage.getItem('theme')
  }, []);
  const [options] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    }
  });

  const [series] = useState([
    {
      name: "Qtd.Vendas",
      data: [30, 40, 45, 50, 49, 60, 70]
    }
  ]);


  return (
    <div style={{ display: 'flex' }}>
      <Menu />
      <div style={{ float: 'right', marginLeft: '1em' }}>
        <Grid>
          <Row>
            <Col lg={6} sm={12}>
              <Panel title=" Fat. Semanal" shaded>
                <Statistic title="Fat. Semanal" value={3900} />
              </Panel>
            </Col>
            <Col lg={6} sm={12}>
              <Panel title="Faturamento mensal" shaded>
                <Statistic title="Fat. Mensal" value={28400} />
              </Panel>
            </Col>
            <Col lg={12} sm={12}>
              <Panel title="Vendas" shaded>
                <h3>Total Vendas</h3>
                <hr />
                <Chart
                  options={options}
                  series={series}
                  type="bar"
                  width="400"
                />
              </Panel>
            </Col>
          </Row>
        </Grid>

      </div>
    </div>
  )
}
export default Home