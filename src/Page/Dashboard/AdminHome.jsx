


import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, Tooltip } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {}, isLoading: statsLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    }
  });

  // Static chart data
  const chartData = [
    { category: 'Vegetables', quantity: 50, revenue: 1200 },
    { category: 'Fruits', quantity: 30, revenue: 900 },
    { category: 'Seeds', quantity: 20, revenue: 700 },
    { category: 'Tools', quantity: 15, revenue: 400 }
  ];

  const pieChartData = chartData.map(item => ({
    name: item.category,
    value: item.revenue
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (statsLoading) {
    return <div className="flex justify-center items-center min-h-screen text-xl font-semibold text-green-600">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Hi, Welcome {user?.displayName || 'Admin'} 👋</h2>
          <p className="text-gray-600 mt-1">Here's a quick overview of your dashboard.</p>
        </div>
        <img
          src={user?.photoURL || 'https://via.placeholder.com/100'}
          alt="Admin"
          className="w-24 h-24 rounded-full shadow-md border-2 border-green-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4">
          <FaDollarSign className="text-3xl text-green-500" />
          <div>
            <p className="text-gray-500">Revenue</p>
            <p className="text-2xl font-bold">${parseFloat(stats.revenue || 0).toFixed(2)}</p>
            <p className="text-sm text-gray-400">Jan 1st - Feb 1st</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4">
          <FaUsers className="text-3xl text-blue-500" />
          <div>
            <p className="text-gray-500">Users</p>
            <p className="text-2xl font-bold">{stats.users}</p>
            <p className="text-sm text-gray-400">↗︎ 400 (22%)</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4">
          <FaBook className="text-3xl text-yellow-500" />
          <div>
            <p className="text-gray-500">Menu Items</p>
            <p className="text-2xl font-bold">{stats.menuItems}</p>
            <p className="text-sm text-gray-400">↗︎ 300 (18%)</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-5 flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <div>
            <p className="text-gray-500">Orders</p>
            <p className="text-2xl font-bold">{stats.orders}</p>
            <p className="text-sm text-gray-400">↘︎ 90 (14%)</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex-1">
          <h3 className="text-xl font-semibold mb-4 text-center">Orders per Category</h3>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`bar-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex-1">
          <h3 className="text-xl font-semibold mb-4 text-center">Revenue Distribution</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`slice-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
