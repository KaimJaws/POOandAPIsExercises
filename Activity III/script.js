// Get cryptocoin list
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(response => response.json())
    .then(data => {
        const coinSelector = document.getElementById('coin-selector');
        const coinDetails = document.getElementById('coin-details');

        // Add options to select
        data.forEach(coin => {
            const option = document.createElement('option');
            option.value = coin.id;
            option.textContent = coin.name;
            coinSelector.appendChild(option);
        });

        // Listen changes
        coinSelector.addEventListener('change', () => {
            const selectedCoinId = coinSelector.value;
            if (selectedCoinId) {
                // Get cryptocoin details
                fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
                    .then(response => response.json())
                    .then(coinData => {
                        const coinCard = document.createElement('div');
                        coinCard.className = 'card';

                        const h2 = document.createElement('h2');
                        h2.textContent = coinData.name;

                        const p = document.createElement('p');
                        p.textContent = `Price: $${coinData.market_data.current_price.usd}`;

                        const marketCap = document.createElement('p');
                        marketCap.textContent = `Market Cap: $${coinData.market_data.market_cap.usd}`;

                        const volume = document.createElement('p');
                        volume.textContent = `Volume: $${coinData.market_data.total_volume.usd}`;

                        coinCard.appendChild(h2);
                        coinCard.appendChild(p);
                        coinCard.appendChild(marketCap);
                        coinCard.appendChild(volume);

                        coinDetails.innerHTML = '';
                        coinDetails.appendChild(coinCard);
                    });
            } else {
                coinDetails.innerHTML = '';
            }
        });
    });