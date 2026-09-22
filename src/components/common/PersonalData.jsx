import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUser,
  FaEnvelope,
  FaIdCard,
  FaShieldAlt,
  FaCalendarAlt,
  FaCreditCard,
  FaChartBar,
  FaFileInvoice,
  FaMailBulk,
  FaHistory,
  FaDatabase,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { useTheme } from "../../themes/ThemeProvider";
import { fetchInvoices } from "../../store/slices/invoiceSlice";

export const PersonalData = () => {
  const { theme } = useTheme();
 const dispatch = useDispatch();
  const { invoices, loading, stats } = useSelector((state) => state.invoices);
  const { user } = useSelector((state) => state.auth);
 useEffect(() => {
    dispatch(fetchInvoices({ limit: 5 }));
  }, [dispatch]);

 // console.log(invoices);

  if (!user) {
    return (
      <div
        className={`min-h-screen ${theme.colors.background} flex items-center justify-center p-4`}
      >
        <div
          className={`${theme.colors.card} border ${theme.colors.border} rounded-2xl p-6 text-center`}
        >
          <p className={`${theme.colors.text} opacity-70`}>
            Loading user data...
          </p>
        </div>
      </div>
    );
  }

  const subscription = user.subscription || {};
  const limits = subscription.limits || {};
  const usage = subscription.usage || {};
 // const stats = user.stats || {};

  const totalInvoiceLimit = limits.invoices?.total || 0;
  const totalEmailLimit = limits.emails?.total || 0;

  const usedInvoices = usage.invoices || 0;
  const usedEmails = usage.emails || 0;

  const invoiceRemaining = Math.max(
    totalInvoiceLimit - usedInvoices,
    0
  );

  const emailRemaining = Math.max(
    totalEmailLimit - usedEmails,
    0
  );

  return (
    <div
      className={`min-h-screen ${theme.colors.background} p-3 sm:p-4 md:p-6 lg:p-8`}
    >
      <div className="mx-auto max-w-7xl space-y-5 md:space-y-6">

        {/* ================= HEADER ================= */}
        <div
          className={`${theme.colors.card} border ${theme.colors.border} rounded-2xl p-5 sm:p-6 md:p-8`}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl font-bold ${theme.colors.text}`}
              >
                Personal Data
              </h1>

              <p
                className={`mt-2 text-sm sm:text-base ${theme.colors.text} opacity-70`}
              >
                Complete account, subscription and usage information
              </p>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name || "User"}
                  className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 ${theme.colors.border}`}
                />
              ) : (
                <div
                  className={`${theme.colors.button} h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center text-white`}
                >
                  <FaUser />
                </div>
              )}

              <div className="min-w-0">
                <p
                  className={`font-semibold truncate max-w-[180px] sm:max-w-[240px] ${theme.colors.text}`}
                >
                  {user.name || "User"}
                </p>

                <p
                  className={`text-xs sm:text-sm truncate max-w-[180px] sm:max-w-[240px] ${theme.colors.text} opacity-60`}
                >
                  {user.email || "No email"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PERSONAL INFORMATION ================= */}
        <SectionCard
          title="Personal Information"
          icon={<FaUser />}
          theme={theme}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <DataItem
              icon={<FaUser />}
              label="Name"
              value={user.name}
              theme={theme}
            />

            <DataItem
              icon={<FaEnvelope />}
              label="Email"
              value={user.email}
              theme={theme}
            />

            <DataItem
              icon={<FaShieldAlt />}
              label="Provider"
              value={user.provider}
              theme={theme}
            />

            <DataItem
              icon={<FaShieldAlt />}
              label="Role"
              value={user.role}
              theme={theme}
            />

            <DataItem
              icon={<FaIdCard />}
              label="Google ID"
              value={user.googleId}
              theme={theme}
            />

            <DataItem
              icon={<FaIdCard />}
              label="User ID"
              value={user._id}
              theme={theme}
            />

            <DataItem
              icon={<FaCheckCircle />}
              label="Account Status"
              value={user.isActive ? "Active" : "Inactive"}
              valueClass={
                user.isActive
                  ? "text-green-500"
                  : "text-red-500"
              }
              theme={theme}
            />

            <DataItem
              icon={<FaCalendarAlt />}
              label="Created At"
              value={formatDate(user.createdAt)}
              theme={theme}
            />

            <DataItem
              icon={<FaCalendarAlt />}
              label="Updated At"
              value={formatDate(user.updatedAt)}
              theme={theme}
            />
          </div>
        </SectionCard>

        {/* ================= SUBSCRIPTION ================= */}
        <SectionCard
          title="Subscription"
          icon={<FaCreditCard />}
          theme={theme}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <DataItem
              label="Plan"
              value={subscription.plan?.toUpperCase()}
              theme={theme}
            />

            <DataItem
              label="Status"
              value={subscription.status}
              theme={theme}
            />

            <DataItem
              label="Current Period Start"
              value={formatDate(subscription.currentPeriodStart)}
              theme={theme}
            />

            <DataItem
              label="Current Period End"
              value={formatDate(subscription.currentPeriodEnd)}
              theme={theme}
            />

            <DataItem
              label="Razorpay Subscription"
              value={subscription.razorpaySubscriptionId}
              theme={theme}
            />

            <DataItem
              label="Subscription Start"
              value={formatDate(subscription.startDate)}
              theme={theme}
            />

            <DataItem
              label="Subscription End"
              value={formatDate(subscription.endDate)}
              theme={theme}
            />

            <DataItem
              label="Reset Date"
              value={formatDate(subscription.resetDate)}
              theme={theme}
            />
          </div>
        </SectionCard>

        {/* ================= USAGE ================= */}
        <SectionCard
          title="Usage & Limits"
          icon={<FaChartBar />}
          theme={theme}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
            <UsageCard
              title="Invoices"
              icon={<FaFileInvoice />}
              used={usedInvoices}
              total={totalInvoiceLimit}
              remaining={invoiceRemaining}
              theme={theme}
            />

            <UsageCard
              title="Emails"
              icon={<FaMailBulk />}
              used={usedEmails}
              total={totalEmailLimit}
              remaining={emailRemaining}
              theme={theme}
            />
          </div>
        </SectionCard>

        {/* ================= ACCOUNT STATS ================= */}
        <SectionCard
          title="Account Statistics"
          icon={<FaChartBar />}
          theme={theme}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <StatCard
              title="Total Invoices"
              value={stats?.totalInvoices || 0}
              icon={<FaFileInvoice />}
              theme={theme}
            />

            <StatCard
              title="Total Revenue"
              value={`₹${stats?.totalRevenue || 0}`}
              icon={<FaChartBar />}
              theme={theme}
            />

            <StatCard
              title="Total Client"
              value={ stats.totalClients || 0}
              icon={<FaDatabase />}
              theme={theme}
            />

            <StatCard
              title="Invoices Remaining"
              value={invoiceRemaining}
              icon={<FaCheckCircle />}
              theme={theme}
            />
          </div>
        </SectionCard>

        {/* ================= SUBSCRIPTION HISTORY ================= */}
       <SectionCard
  title="Subscription History"
  icon={<FaHistory />}
  theme={theme}
>
  {subscription.history?.length > 0 ? (
    <div
      className="
        space-y-4
        max-h-[500px]
        overflow-y-auto
        pr-2
        scrollbar-thin
      "
    >
      {subscription.history.map((item, index) => (
        <div
          key={item._id || index}
          className={`${theme.colors.background} border ${theme.colors.border} rounded-xl p-4 sm:p-5`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="min-w-0">
              <h3
                className={`text-base sm:text-lg font-semibold ${theme.colors.text}`}
              >
                {item.plan?.toUpperCase() || "PLAN"}
              </h3>

              <p
                className={`text-xs sm:text-sm ${theme.colors.text} opacity-60 mt-1`}
              >
                Subscription #{index + 1}
              </p>
            </div>

            <span
              className={`${theme.colors.button} text-white rounded-full px-4 py-1.5 text-sm font-semibold w-fit shrink-0`}
            >
              ₹{item.amount || 0}
            </span>
          </div>

          {/* Subscription Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <DataItem
              label="Start Date"
              value={formatDate(item.startDate)}
              theme={theme}
            />

            <DataItem
              label="End Date"
              value={formatDate(item.endDate)}
              theme={theme}
            />

            <DataItem
              label="Amount"
              value={`₹${item.amount || 0}`}
              theme={theme}
            />

            <DataItem
              label="Invoices Added"
              value={item.invoicesAdded}
              theme={theme}
            />

            <DataItem
              label="Emails Added"
              value={item.emailsAdded}
              theme={theme}
            />

            <DataItem
              label="Payment ID"
              value={item.razorpayPaymentId}
              theme={theme}
            />

            <DataItem
              label="Created At"
              value={formatDate(item.createdAt)}
              theme={theme}
            />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div
      className={`text-center py-8 ${theme.colors.text} opacity-60`}
    >
      <FaHistory className="mx-auto text-3xl mb-3 opacity-40" />

      <p>No subscription history found.</p>
    </div>
  )}
</SectionCard>
        {/* ================= INVOICE DATA ================= */}
        <SectionCard
          title="Invoice Data"
          icon={<FaFileInvoice />}
          theme={theme}
        >
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-500" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <StatCard
                title="Invoices Loaded"
                value={Array.isArray(invoices) ? invoices.length : 0}
                icon={<FaDatabase />}
                theme={theme}
              />

              <StatCard
                title="Total Invoice Limit"
                value={totalInvoiceLimit}
                icon={<FaFileInvoice />}
                theme={theme}
              />

              <StatCard
                title="Invoices Used"
                value={usedInvoices}
                icon={<FaChartBar />}
                theme={theme}
              />

              <StatCard
                title="Invoices Remaining"
                value={invoiceRemaining}
                icon={<FaCheckCircle />}
                theme={theme}
              />
            </div>
          )}
        </SectionCard>

        {/* ================= RAW USER DATA ================= */}
        <SectionCard
          title="Complete User Data"
          icon={<FaDatabase />}
          theme={theme}
        >
          <div className="relative">
            <pre
              className={`${theme.colors.background} border ${theme.colors.border} rounded-xl p-4 sm:p-5 text-xs sm:text-sm overflow-auto max-h-[500px] whitespace-pre-wrap break-all`}
            >
              <code className={theme.colors.text}>
                {JSON.stringify(user, null, 2)}
              </code>
            </pre>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

/* =========================================================
   SECTION CARD
========================================================= */

const SectionCard = ({ title, icon, theme, children }) => {
  return (
    <div
      className={`${theme.colors.card} border ${theme.colors.border} rounded-2xl p-4 sm:p-5 md:p-6`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`${theme.colors.button} text-white p-2.5 rounded-xl shrink-0`}
        >
          {icon}
        </div>

        <h2
          className={`text-lg sm:text-xl font-semibold ${theme.colors.text}`}
        >
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
};

/* =========================================================
   DATA ITEM
========================================================= */

const DataItem = ({
  label,
  value,
  icon,
  valueClass = "",
  theme,
}) => {
  return (
    <div
      className={`${theme.colors.background} border ${theme.colors.border} rounded-xl p-4 min-w-0`}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div
            className={`${theme.colors.primary} mt-0.5 shrink-0`}
          >
            {icon}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <p
            className={`mb-1 text-[10px] sm:text-xs uppercase tracking-wide ${theme.colors.text} opacity-50`}
          >
            {label}
          </p>

          <p
            className={`break-all text-sm sm:text-base font-medium ${theme.colors.text} ${valueClass}`}
          >
            {value ?? "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   STAT CARD
========================================================= */

const StatCard = ({
  title,
  value,
  icon,
  theme,
}) => {
  return (
    <div
      className={`${theme.colors.background} border ${theme.colors.border} rounded-xl p-4 sm:p-5 transition-all hover:shadow-lg hover:scale-[1.01]`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`${theme.colors.button} text-white p-3 rounded-xl shrink-0`}
          >
            {icon}
          </div>
        )}

        <div className="min-w-0">
          <p
            className={`text-xs sm:text-sm ${theme.colors.text} opacity-60`}
          >
            {title}
          </p>

          <p
            className={`mt-1 text-xl sm:text-2xl font-bold ${theme.colors.text} truncate`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   USAGE CARD
========================================================= */

const UsageCard = ({
  title,
  icon,
  used,
  total,
  remaining,
  theme,
}) => {
  const percentage =
    total > 0
      ? Math.min((used / total) * 100, 100)
      : 0;

  return (
    <div
      className={`${theme.colors.background} border ${theme.colors.border} rounded-xl p-4 sm:p-5`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`${theme.colors.button} text-white p-2.5 rounded-lg shrink-0`}
          >
            {icon}
          </div>

          <h3
            className={`font-semibold ${theme.colors.text} truncate`}
          >
            {title}
          </h3>
        </div>

        <span
          className={`text-xs sm:text-sm ${theme.colors.text} opacity-60 whitespace-nowrap`}
        >
          {used} / {total}
        </span>
      </div>

      {/* Progress */}
      <div
        className={`mt-5 h-2.5 overflow-hidden rounded-full ${theme.colors.card} border ${theme.colors.border}`}
      >
        <div
          className={`h-full rounded-full ${theme.colors.button} transition-all duration-500`}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="mt-3 flex justify-between gap-3 text-xs sm:text-sm">
        <span className={`${theme.colors.text} opacity-60`}>
          Used: {used}
        </span>

        <span className="text-green-500">
          Remaining: {remaining}
        </span>
      </div>

      <p
        className={`mt-2 text-xs ${theme.colors.text} opacity-50`}
      >
        {percentage.toFixed(0)}% used
      </p>
    </div>
  );
};

/* =========================================================
   DATE FORMATTER
========================================================= */

const formatDate = (date) => {
  if (!date) return "N/A";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "N/A";
  }

  return parsedDate.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default PersonalData;