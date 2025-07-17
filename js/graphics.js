// Gráfico de Pizza (Distribuição de Contas)
const ctxContas = document.getElementById('graficoContas');
new Chart(ctxContas, {
  type: 'doughnut',
  data: {
    labels: ['Contas Principais', 'Subcontas', 'Contas Associadas'],
    datasets: [{
      data: [21, 11, 4],
      backgroundColor: ['#154A99', '#031D42', '#FFBF12'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#6b7280',
          font: { size: 12 }
        }
      }
    }
  }
});

// Gráfico de Linhas (Lançamentos por Mês)
const ctxLanc = document.getElementById('graficoLancamentos');
new Chart(ctxLanc, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Lançamentos',
      data: [120, 200, 260, 180, 90, 290],
      fill: false,
      borderColor: '#154A99',
      backgroundColor: '#FFBF12',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 300,
        ticks: {
          stepSize: 50,
          color: '#6b7280',
          font: { size: 12 }
        },
        grid: {
          color: '#f3f4f6'
        }
      },
      x: {
        ticks: {
          color: '#6b7280',
          font: { size: 12 }
        },
        grid: {
          display: false
        }
      }
    }
  }
});