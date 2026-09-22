// frontend/src/components/affiliate/AffiliateLinks.jsx

import React from 'react';
import {
  FaPlus,
  FaCopy,
  FaTrash,
  FaLink,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';

import { useTheme } from '../../themes/ThemeProvider';


const AffiliateLinks = ({
  links = [],
  affiliateCode = '',

  pagination = {
    page: 1,
    limit: 10,
    total: 0,
    pages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  },

  onPageChange,
  onLimitChange,
  onCopyLink,
  onDeleteLink,
  onCreateLink,
}) => {

  const { theme } = useTheme();


  // ============================================================
  // PAGINATION VALUES
  // ============================================================

  const currentPage =
    Number(pagination?.page) || 1;

  const currentLimit =
    Number(pagination?.limit) || 10;

  const total =
    Number(pagination?.total) || 0;

  const totalPages =
    Math.max(
      1,
      Number(pagination?.pages) || 1
    );


  // ============================================================
  // DERIVED FLAGS
  // ============================================================

  const hasPrevious =
    currentPage > 1;

  const hasNext =
    currentPage < totalPages;


  // ============================================================
  // PAGE NUMBERS
  // ============================================================

  const getPageNumbers = () => {

    const pages = [];

    // Small number of pages
    if (totalPages <= 7) {

      for (
        let i = 1;
        i <= totalPages;
        i++
      ) {
        pages.push(i);
      }

      return pages;
    }


    // First pages
    if (currentPage <= 4) {

      return [
        1,
        2,
        3,
        4,
        5,
        '...',
        totalPages,
      ];
    }


    // Last pages
    if (
      currentPage >=
      totalPages - 3
    ) {

      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }


    // Middle pages
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };


  const pageNumbers =
    getPageNumbers();


  // ============================================================
  // HANDLERS
  // ============================================================

  const handlePageChange = (page) => {

    const newPage = Number(page);

    if (!Number.isInteger(newPage)) {
      return;
    }

    if (
      newPage < 1 ||
      newPage > totalPages
    ) {
      return;
    }

    if (newPage === currentPage) {
      return;
    }

    onPageChange?.(newPage);
  };


  const handleLimitChange = (e) => {

    const newLimit =
      Number(e.target.value);

    if (!newLimit) {
      return;
    }

   // console.log('New Limit', newLimit);

    onLimitChange?.(newLimit);
  };


  // ============================================================
  // RANGE
  // ============================================================

  const startItem =
    total === 0
      ? 0
      : (currentPage - 1) *
          currentLimit +
        1;

  const endItem = Math.min(
    currentPage * currentLimit,
    total
  );


  // ============================================================
  // COPY LINK
  // ============================================================

  const handleCopy = (link) => {

    if (!link?.slug) {
      return;
    }

    onCopyLink?.(
      link.slug,
      affiliateCode
    );
  };


  // ============================================================
  // EMPTY STATE
  // ============================================================

  const isEmpty = links.length === 0;


  // ============================================================
  // BUTTON CLASS
  // ============================================================

  const baseButtonClass = `
    flex
    items-center
    justify-center
    transition-all
    duration-200
    rounded-lg
  `;


  return (
    <section
      className={`
        ${theme.colors.card}
        rounded-2xl
        border
        ${theme.colors.border}
        overflow-hidden
      `}
    >

      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <div
        className="
          px-4
          sm:px-6
          py-4
          border-b
          border-opacity-20
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
        "
      >

        {/* Title */}

        <div>

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <FaLink
              className={`
                ${theme.colors.primary}
              `}
            />

            <h2
              className={`
                text-lg
                sm:text-xl
                font-bold
                ${theme.colors.text}
              `}
            >
              Affiliate Links
            </h2>

          </div>

          <p
            className={`
              text-xs
              sm:text-sm
              ${theme.colors.text}
              opacity-60
              mt-1
            `}
          >
            Create and manage your
            affiliate links
          </p>

        </div>


        {/* Create Button */}

        <button
          type="button"
          onClick={onCreateLink}
          className={`
            ${theme.colors.button}
            text-white
            px-4
            py-2.5
            rounded-lg
            flex
            items-center
            justify-center
            gap-2
            text-sm
            font-medium
            transition-all
            hover:scale-[1.02]
            active:scale-[0.98]
            w-full
            sm:w-auto
          `}
        >

          <FaPlus />

          Create Link

        </button>

      </div>


      {/* ====================================================== */}
      {/* CONTENT */}
      {/* ====================================================== */}

      {isEmpty ? (

        /* ==================================================== */
        /* EMPTY */
        /* ==================================================== */

        <div
          className="
            px-6
            py-14
            text-center
          "
        >

          <div
            className={`
              w-16
              h-16
              rounded-2xl
              ${theme.colors.background}
              flex
              items-center
              justify-center
              mx-auto
              mb-4
            `}
          >

            <FaLink
              className={`
                text-2xl
                ${theme.colors.primary}
                opacity-60
              `}
            />

          </div>

          <h3
            className={`
              text-base
              font-semibold
              ${theme.colors.text}
              mb-2
            `}
          >
            No affiliate links yet
          </h3>

          <p
            className={`
              text-sm
              ${theme.colors.text}
              opacity-60
              mb-5
            `}
          >
            Create your first affiliate
            link to start tracking
            referrals.
          </p>

          <button
            type="button"
            onClick={onCreateLink}
            className={`
              ${theme.colors.button}
              text-white
              px-5
              py-2.5
              rounded-lg
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
            `}
          >

            <FaPlus />

            Create Your First Link

          </button>

        </div>

      ) : (

        <>

          {/* ================================================== */}
          {/* TABLE */}
          {/* ================================================== */}

          <div
            className="
              overflow-x-auto
            "
          >

            <table
              className="
                w-full
                min-w-[850px]
              "
            >

              <thead>

                <tr
                  className={`
                    ${theme.colors.background}
                    border-b
                    ${theme.colors.border}
                  `}
                >

                  <th
                    className={`
                      px-4
                      sm:px-6
                      py-3
                      text-left
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      ${theme.colors.text}
                      opacity-60
                    `}
                  >
                    Link
                  </th>


                  <th
                    className={`
                      px-4
                      py-3
                      text-left
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      ${theme.colors.text}
                      opacity-60
                    `}
                  >
                    Slug
                  </th>


                  <th
                    className={`
                      px-4
                      py-3
                      text-center
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      ${theme.colors.text}
                      opacity-60
                    `}
                  >
                    Clicks
                  </th>


                 




                  <th
                    className={`
                      px-4
                      py-3
                      text-center
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      ${theme.colors.text}
                      opacity-60
                    `}
                  >
                    Status
                  </th>


                  <th
                    className={`
                      px-4
                      sm:px-6
                      py-3
                      text-right
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      ${theme.colors.text}
                      opacity-60
                    `}
                  >
                    Actions
                  </th>

                </tr>

              </thead>


              <tbody>

                {links.map((link) => {

                  const clicks =
                    Number(link.clicks) || 0;

                  const conversions =
                    Number(link.conversions) || 0;

                  const revenue =
                    Number(link.revenue) || 0;


                  return (

                    <tr
                      key={link._id}
                      className={`
                        border-b
                        ${theme.colors.border}
                        last:border-b-0
                        ${theme.colors.hover}
                        transition-colors
                      `}
                    >

                      {/* LINK */}

                      <td
                        className="
                          px-4
                          sm:px-6
                          py-4
                        "
                      >

                        <div
                          className="
                            max-w-[260px]
                          "
                        >

                          <p
                            className={`
                              text-sm
                              font-semibold
                              ${theme.colors.text}
                              truncate
                            `}
                            title={link.name}
                          >
                            {link.name || 'Unnamed Link'}
                          </p>

                          <p
                            className={`
                              text-xs
                              ${theme.colors.text}
                              opacity-50
                              truncate
                              mt-1
                            `}
                            title={link.destination}
                          >
                            {link.destination || '-'}
                          </p>

                        </div>

                      </td>


                      {/* SLUG */}

                      <td
                        className="
                          px-4
                          py-4
                        "
                      >

                        <span
                          className={`
                            inline-flex
                            px-2.5
                            py-1
                            rounded-md
                            text-xs
                            font-mono
                            ${theme.colors.background}
                            ${theme.colors.text}
                            border
                            ${theme.colors.border}
                          `}
                        >
                          /{link.slug || '-'}
                        </span>

                      </td>


                      {/* CLICKS */}

                      <td
                        className="
                          px-4
                          py-4
                          text-center
                        "
                      >

                        <span
                          className={`
                            text-sm
                            font-semibold
                            ${theme.colors.text}
                          `}
                        >
                          {clicks}
                        </span>

                      </td>


                      


                      {/* STATUS */}

                      <td
                        className="
                          px-4
                          py-4
                          text-center
                        "
                      >

                        <span
                          className={`
                            inline-flex
                            items-center
                            px-2.5
                            py-1
                            rounded-full
                            text-xs
                            font-medium

                            ${
                              link.status === 'active'
                                ? `
                                  bg-green-500/10
                                  text-green-500
                                `
                                : `
                                  bg-red-500/10
                                  text-red-500
                                `
                            }
                          `}
                        >

                          <span
                            className="
                              w-1.5
                              h-1.5
                              rounded-full
                              bg-current
                              mr-1.5
                            "
                          />

                          {link.status === 'active'
                            ? 'Active'
                            : 'Inactive'}

                        </span>

                      </td>


                      {/* ACTIONS */}

                      <td
                        className="
                          px-4
                          sm:px-6
                          py-4
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            justify-end
                            gap-2
                          "
                        >

                          {/* COPY */}

                          <button
                            type="button"
                            onClick={() => handleCopy(link)}
                            className={`
                              ${baseButtonClass}
                              w-9
                              h-9
                              ${theme.colors.hover}
                              ${theme.colors.text}
                              hover:scale-105
                            `}
                            title="Copy affiliate link"
                            aria-label="Copy affiliate link"
                          >

                            <FaCopy
                              className="
                                text-sm
                                opacity-70
                              "
                            />

                          </button>


                          {/* DELETE */}

                          <button
                            type="button"
                            onClick={() =>
                              onDeleteLink?.(link._id)
                            }
                            className="
                              w-9
                              h-9
                              rounded-lg
                              flex
                              items-center
                              justify-center
                              transition-all
                              hover:scale-105
                              hover:bg-red-50
                              dark:hover:bg-red-900/20
                            "
                            title="Delete link"
                            aria-label="Delete affiliate link"
                          >

                            <FaTrash
                              className="
                                text-sm
                                text-red-500
                              "
                            />

                          </button>

                        </div>

                      </td>

                    </tr>

                  );
                })}

              </tbody>

            </table>

          </div>


          {/* ================================================== */}
          {/* PAGINATION FOOTER */}
          {/* ================================================== */}

          <div
            className={`
              px-4
              sm:px-6
              py-4
              border-t
              ${theme.colors.border}
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-4
            `}
          >

            {/* LEFT */}

            <div
              className={`
                flex
                flex-col
                sm:flex-row
                sm:items-center
                gap-3
                text-xs
                sm:text-sm
                ${theme.colors.text}
                opacity-70
              `}
            >

              <span>
                Showing{' '}
                <strong className="opacity-100">
                  {startItem}
                </strong>

                {' '}to{' '}

                <strong className="opacity-100">
                  {endItem}
                </strong>

                {' '}of{' '}

                <strong className="opacity-100">
                  {total}
                </strong>

                {' '}links
              </span>


              {/* LIMIT */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                <span>
                  Per page:
                </span>

                <select
                  value={currentLimit}
                  onChange={handleLimitChange}
                  className={`
                    px-2.5
                    py-1.5
                    rounded-lg
                    border
                    ${theme.colors.border}
                    ${theme.colors.card}
                    ${theme.colors.text}
                    text-xs
                    sm:text-sm
                    outline-none
                    cursor-pointer
                  `}
                >

                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>

                </select>

              </div>

            </div>


            {/* RIGHT */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-1.5
              "
            >

              {/* FIRST */}

              <button
                type="button"
                disabled={!hasPrevious}
                onClick={() => handlePageChange(1)}
                className={`
                  ${baseButtonClass}
                  w-9
                  h-9
                  border
                  ${theme.colors.border}

                  ${
                    !hasPrevious
                      ? `
                        opacity-30
                        cursor-not-allowed
                      `
                      : `
                        ${theme.colors.hover}
                        hover:scale-105
                      `
                  }
                `}
                title="First page"
                aria-label="First page"
              >

                <FaAngleDoubleLeft className="text-xs" />

              </button>


              {/* PREVIOUS */}

              <button
                type="button"
                disabled={!hasPrevious}
                onClick={() =>
                  handlePageChange(currentPage - 1)
                }
                className={`
                  ${baseButtonClass}
                  w-9
                  h-9
                  border
                  ${theme.colors.border}

                  ${
                    !hasPrevious
                      ? `
                        opacity-30
                        cursor-not-allowed
                      `
                      : `
                        ${theme.colors.hover}
                        hover:scale-105
                      `
                  }
                `}
                title="Previous page"
                aria-label="Previous page"
              >

                <FaChevronLeft className="text-xs" />

              </button>


              {/* PAGE NUMBERS */}

              <div
                className="
                  flex
                  items-center
                  gap-1
                "
              >

                {pageNumbers.map((page, index) => {

                  if (page === '...') {

                    return (

                      <span
                        key={`dots-${index}`}
                        className={`
                          w-9
                          h-9
                          flex
                          items-center
                          justify-center
                          text-sm
                          ${theme.colors.text}
                          opacity-50
                        `}
                      >
                        ...
                      </span>

                    );
                  }


                  const active =
                    page === currentPage;


                  return (

                    <button
                      key={page}
                      type="button"
                      onClick={() =>
                        handlePageChange(page)
                      }
                      className={`
                        ${baseButtonClass}
                        w-9
                        h-9
                        text-sm
                        font-medium

                        ${
                          active
                            ? `
                              ${theme.colors.button}
                              text-white
                              shadow-sm
                            `
                            : `
                              ${theme.colors.text}
                              ${theme.colors.hover}
                            `
                        }
                      `}
                      aria-current={
                        active ? 'page' : undefined
                      }
                    >
                      {page}
                    </button>

                  );
                })}

              </div>


              {/* NEXT */}

              <button
                type="button"
                disabled={!hasNext}
                onClick={() =>
                  handlePageChange(currentPage + 1)
                }
                className={`
                  ${baseButtonClass}
                  w-9
                  h-9
                  border
                  ${theme.colors.border}

                  ${
                    hasNext
                      ? `
                        ${theme.colors.hover}
                        hover:scale-105
                      `
                      : `
                        opacity-30
                        cursor-not-allowed
                      `
                  }
                `}
                title="Next page"
                aria-label="Next page"
              >

                <FaChevronRight className="text-xs" />

              </button>


              {/* LAST */}

              <button
                type="button"
                disabled={!hasNext}
                onClick={() =>
                  handlePageChange(totalPages)
                }
                className={`
                  ${baseButtonClass}
                  w-9
                  h-9
                  border
                  ${theme.colors.border}

                  ${
                    !hasNext
                      ? `
                        opacity-30
                        cursor-not-allowed
                      `
                      : `
                        ${theme.colors.hover}
                        hover:scale-105
                      `
                  }
                `}
                title="Last page"
                aria-label="Last page"
              >

                <FaAngleDoubleRight className="text-xs" />

              </button>

            </div>

          </div>

        </>

      )}

    </section>
  );
};


export default AffiliateLinks;